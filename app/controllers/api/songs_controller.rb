class Api::SongsController < ApplicationController

    def index 
        if params[:user_id] && params[:user_id] == current_user.id
            @songs = current_user.songs
        else 
            @songs = Song.all
        end
    end 

    def show 
        @song = Song.find_by(id: params[:id])
    end

    def create 
        if params[:user_id] && params[:user_id] == current_user.id 
        end
    end

    def destroy
        if params[:user_id] && params[:user_id] == current_user.id 
        end
    end

    private 
    def song_params 
        params.require(:song).permit(:title, :time, :artist_id, :album_id)
    end

end
