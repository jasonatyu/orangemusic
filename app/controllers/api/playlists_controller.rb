class Api::PlaylistsController < ApplicationController

    def index 
        if params[:user_id]
            if params[:user_id].to_i == current_user.id 
                @playlists = current_user.playlists.includes(:songs)
            else
                render json: ["You don't have permission to see this user's playlists"], status: 422
            end 
        else 
            @playlists = Playlist.all 
        end
    end

    def search

        if params[:query] == 'explore'
            @playlists = Playlist.where("category in (?)", ["featured", "top", "hits"])
            render 'api/playlists/index.json'
        else 
            if params[:query].present?
                @playlists = Playlist.where("lower(name) LIKE ?", "%#{params[:query].downcase}%")
            else
                @playlists = Playlist.none
            end
            render 'api/playlists/index.json'
        end
    end

    def show 
        @playlist = Playlist.includes(:songs).find_by(id: params[:id])
    end

    def create 
        @playlist = Playlist.new(playlist_params)
        if current_user
            @playlist.user_id = current_user.id 
            if @playlist.save 
                render 'api/playlists/show.json'
            else 
                render json: @playlist.errors.full_messages, status: 422
            end
        else 
            render json: ["You must be logged in to create a new playlist"], status: 422
        end
    end

    def update 
        # todo: what to show users who aren't owners of the playlist?
        @playlist = Playlist.find_by(id: params[:id])
        if @playlist.user_id == current_user.id 
            if @playlist.update(playlist_params)
                render 'api/playlists/show.json'
            else
                render json: @playlist.errors.full_messages, status: 422
            end
        else 
            render json: ["You don't have permission to update this playlist"], status: 422
        end
    end

    def destroy 
        @playlist = Playlist.find_by(id: params[:id].to_i)
        if @playlist.user_id == current_user.id 
            @playlist.destroy
            render json: {}, status: 200
        else
            render json: ["You don't have permission to delete this playlist"], status: 422
        end 
    end

    private 
    def playlist_params 
        params.require(:playlist).permit(:name, :description, :photo, song_ids: [])
    end
end
