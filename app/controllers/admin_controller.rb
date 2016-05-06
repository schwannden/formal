class AdminController < ApplicationController
  before_action "authenticate!"

  def index
    @user = {path: request.path, data: {}}.to_json
  end

end
