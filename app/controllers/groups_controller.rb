class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    Group.create(create_params)
    redirect_to controller: :messages, action: :index
  end

  def edit
    @group = Group.find(params[:group_id])
  end

  def update
  end

  private
  def create_params
    params.require(:group).permit(:name)
  end

end
