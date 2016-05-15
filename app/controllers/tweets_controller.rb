class TweetsController < ApplicationController
  before_action :set_tweet, only: [:show, :update]

  def index
    render json: {
      tweets: Tweet.includes(:user).order(created_at: :desc).all,
      likes: Like.order(:to_id).all,
      comments: Comment.includes(:from).order(created_at: :asc).all
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

  def show
    if @tweet.user == current_user
      render json: @tweet
    else
      render json: { :errors => "you are not authorized to edit this tweet" }
    end
  end

  def update
    if @tweet.user == current_user
      if @tweet.update tweet_params
        render json: @tweet
      else
        render json: { :errors => @tweet.errors.full_messages }
      end
    else
      render json: { :errors => "you are not authorized to edit this tweet" }
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end

  def set_tweet
    @tweet = Tweet.find params[:id] 
  end
end
