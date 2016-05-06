class LikesController < ApplicationController
  def index
    render json: Like.all
  end

  def create
    @like = Like.new like_params.merge ({from: current_user})
    if @like.save
      render json: @like
    else
      render json: { :errors => @like.errors.full_messages }
    end
  end

  def destroy
    @like = Like.find params[:id]
    if @like.delete
      render json: @like
    else
      render json: { :errors => @like.errors.full_messages }
    end
  end

  private

  def like_params
    params.require(:like).permit(:to_id)
  end
end
