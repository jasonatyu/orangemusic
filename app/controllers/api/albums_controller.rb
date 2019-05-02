class Api::AlbumsController < ApplicationController

    def index 
        @albums = Album.all 
    end

    def show 
        @album = Album.find_by(id: params[:id])
    end

    private
    def album_params
        params.require(:album).permit(:title, :year, :category, :description, :artist_id)
    end

end
