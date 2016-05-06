class Users::RegistrationsController < Devise::RegistrationsController
  before_filter :configure_permitted_parameters
  clear_respond_to 
  respond_to :json

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:account_update).push(:name)
  end
end
