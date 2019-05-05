class Api::ArtistsController < ApplicationController

    def index 
        if params[:user_id] 
            if params[:user_id].to_i == current_user.id
                @artists = current_user.artists.includes(:albums)
            else 
                render json: ["You don't have permission to see this user's artists"], status: 422
            end
        else
            @artists = Artist.all 
        end
    end

    def show 
        @artist = Artist.find_by(id: params[:id])
    end

    private
    def artist_params
        params.require(:artist).permit(:name, :description)
    end
end
