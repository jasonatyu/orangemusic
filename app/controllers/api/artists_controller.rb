class Api::ArtistsController < ApplicationController

    def index 
        @artists = Artist.all 
    end

    def show 
        @artist = Artist.find_by(id: params[:id])
    end

    private
    def artist_params
        params.require(:artist).permit(:name, :description)
    end
end
