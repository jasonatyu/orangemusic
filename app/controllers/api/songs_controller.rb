class Api::SongsController < ApplicationController

    def index 
        if params[:user_id] 
            if params[:user_id].to_i == current_user.id
                @songs = current_user.songs
            else 
                render json: ["You don't have permission to see this user's songs"], status: 422
            end
        else 
            @songs = Song.all
        end
    end 

    def show 
        @song = Song.find_by(id: params[:id])
    end

    def create 
        #adds song to user's song's 
        if params[:user_id] 
            if params[:user_id].to_i == current_user.id 
                current_user.song_ids = current_user.song_ids.concat([params[:song_id]])
                render json: {}, status: 200
            end
        end

        if params[:playlist_id] 
            @playlist = Playlist.find_by(id: params[:playlist_id])
            if @playlist.user_id == current_user.id 
                @playlist.song_ids = @playlist.song_ids.concat([params[:song_id]])
                render json: {}, status: 200
            else 
                render json: ["You don't have permission to add songs to this playlist"], status: 422
            end
        end
    end

    def destroy
        if params[:user_id] 
            if params[:user_id].to_i == current_user.id 
                current_user.songs.delete(params[:id].to_i)
                render json: {}, status: 200
            else
               render json: ["You don't have permission to remove this song from this user's library"], status: 422
            end
        end

        if params[:playlist_id] 
            @playlist = Playlist.find_by(id: params[:playlist_id].to_i)
            if @playlist.user_id == current_user.id 
                @playlist.songs.delete(params[:id].to_i)
                render json: {}, status: 200
            else
                render json: ["You don't have permission to delete this song from this playlist"], status: 422
            end
        end
    end

    private 
    def song_params 
        params.require(:song).permit(:title, :time, :artist_id, :album_id)
    end

end
