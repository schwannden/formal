class CommentsController < ApplicationController
  before_action :set_tweet,   only: [:create, :update]
  before_action :set_comment, only: [:edit, :update]

  def index
    render json: Comment.includes(:from).order(created_at: :desc).all
  end

  def create
    @comment = Comment.new comment_params
    if @comment.save
      render json: @comment
    else
      render json: { :errors => @comment.errors.full_messages }
    end
  end

  def destroy
    @comment = Comment.find params[:id]
    if @comment.delete
      render json: @comment
    else
      render json: { :errors => @comment.errors.full_messages }
    end
  end

  def edit
    if @comment.from == current_user
      render json: @comment
    else
      render json: { :errors => "you are not authorized to edit this comment" }
    end
  end

  def update
    if @comment.from == current_user
      if @comment.update comment_params
        render json: @comment
      else
        render json: { :errors => @comment.errors.full_messages }
      end
    else
      render json: { :errors => "you are not authorized to edit this comment" }
    end
  end

  private

  def comment_params
    params[:comment][:from_id] = current_user.id
    params[:comment][:to_id] = @tweet.id
    params.require(:comment).permit(:message, :from_id, :to_id)
  end

  def set_tweet
    @tweet = Tweet.find params[:tweet_id]
  end

  def set_comment
    @comment = Comment.find params[:id]
  end
end
