class Api::AlbumsController < ApplicationController

    def index 
        if params[:user_id] 
            if params[:user_id].to_i == current_user.id
                @albums = current_user.albums.includes(:songs)
            else 
                render json: ["You don't have permission to see this user's albums"], status: 422
            end
        else
            @albums = Album.all 
        end
    end

    def search
        if params[:query].present?
            @albums = Album.where("lower(title) LIKE ?", "%#{params[:query].downcase}%")
        else
            @albums = Album.none
        end
        render 'api/albums/index.json'
    end

    def show 
        @album = Album.find_by(id: params[:id])
    end

    private
    def album_params
        params.require(:album).permit(:title, :year, :category, :description, :artist_id)
    end

end
