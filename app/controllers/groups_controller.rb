class GroupsController < ApplicationController

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
    @group = Group.find(params[:group_id])
  end

  def update
  end

  private
  def create_params
    params.require(:group).permit( :name, user_ids: [])
  end

end

