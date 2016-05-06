class CommentsController < ApplicationController
  def index
    render json: Comment.includes(:user).order(created_at: :desc).all
  end

  def create
    @comment = Comment.new comment_params.merge ({from: current_user})
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

  private

  def comment_params
    params.require(:comment).permit(:to_id, :message)
  end
end
