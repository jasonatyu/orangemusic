class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: 'Username or password incorrect', status: 422
        else 
            login!(@user)
            respond_to do |format|
                format.json 
                render 'api/users/show.json'
            end
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else 
            render json: 'No current user', status: 404
        end
    end

end
