class GroupsController < ApplicationController

  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(create_params)
    if @group.save
      redirect_to :root, notice: "グループを作成しました"
    else
      flash[:alert] = 'グループ名を入力してください'
      render :new
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(create_params)
      redirect_to group_messages_index_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private
  def create_params
    params.require(:group).permit( :name, user_ids: [])
  end

end

