class Api::UsersController < ApplicationController
    
    def index 
        @users = User.all
    end 

    def show 
        @user = User.find_by(id: params[:id])
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            respond_to do |format|
                format.json 
                render 'api/users/show.json'
            end
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 
    def user_params 
        params.require(:user).permit(:email, :password, :firstname, :lastname, song_ids: [])
    end 

end
