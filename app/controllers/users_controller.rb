class UsersController < ApplicationController
  before_action "signin_required?", only: [:login]

  def login
  end

  def get_user
    render json: current_user
  end
end
