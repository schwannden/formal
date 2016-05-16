class LikesController < ApplicationController
  before_action :set_tweet,   only: [:create]

  def index
    render json: Like.all
  end

  def create
    @like = Like.new like_params
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
    {from_id: current_user.id, to_id: @tweet.id}
  end

  def set_tweet
    @tweet = Tweet.find params[:tweet_id]
  end

end
