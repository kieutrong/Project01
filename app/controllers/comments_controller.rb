class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  def index
    @comments = Comment.all
  end

  def show
    @comments = @user.comments.paginate page: params[:page],
      per_page: Settings.user.users_per_page
  end

  def new
    @comment = Comment.new
  end

  def edit
  end

  def create
      @micropost = Micropost.find_by id:(params[:micropost_id])
      @comment = Comment.find_by id:(params[:manager_parent_id])
    if @comment.nil?
      @comment = @micropost.comments.build(comment_params)
    else
      @comment_child = @comment.comments.build(comment_params)
    end

      if @comment.save
        render json: {status: :success, html: render_to_string(@comment)}
      else
        render json: {status: :error, message: "Create comment fails"}
      end
  end

  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    if @comment.destroy
      render json: {status: :success}
    else
      render json: {status: :error, message: "Delete fails"}
    end
  end

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit :content
    end
end


