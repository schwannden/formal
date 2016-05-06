class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def authenticate!
    if current_user == nil && request.fullpath != "/"
      redirect_to '/login'
    end
  end

  def signin_required?
    if current_user
      redirect_to '/admin/quiz'
    end
  end
end
