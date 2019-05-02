class Api::PlaylistsController < ApplicationController

    def index 
        if params[:user_id] && params[:user_id] == current_user.id 
            @playlists = Playlist.where(user_id: current_user.id)
        else 
            @playlists = Playlist.all 
        end
    end

    def show 
        @playlist = Playlist.find_by(id: params[:id])
    end

    def create 
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id 
        if @playlist.save 
            render 'api/playlists/show.json'
        else 
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def update 
        # todo: what to show users who aren't owners of the playlist?
        @playlist = Playlist.find_by(id: params[:id])
        if @playlist.user_id == current_user.id 
            if @playlist.update_attributes(playlist_params)
                render 'api/playlists/show.json'
            else
                render json: @playlist.errors.full_messages, status: 422
            end
        else 
            render 'api/playlists/show.json'
        end
    end

    def destroy 
        @playlist = Playlist.find_by(id: params[:id])
        if @playlist.user_id == current_user.id 
            @playlist.destroy
            render json: {}, status: 200
        else
            render 'api/playlists/show.json'
        end 
    end

    private 
    def playlist_params 
        params.require(:playlist).permit(:name, :description, song_ids: [])
    end

end
