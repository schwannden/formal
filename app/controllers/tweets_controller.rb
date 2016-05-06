class TweetsController < ApplicationController
  def index
    render json: {
      tweets: Tweet.includes(:user).order(created_at: :desc).all,
      likes: Like.order(:to_id).all,
      comments: Comment.includes(:from).order(created_at: :desc).all
    }
  end

  def create
    @tweet = Tweet.new tweet_params.merge ({user: current_user})
    if @tweet.save
      render json: @tweet
    else
      render json: { :errors => @tweet.errors.full_messages }
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
