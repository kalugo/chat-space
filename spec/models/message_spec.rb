require 'rails_helper'

describe Message do
  describe '#create' do
    context 'can save' do
      it "is valid without a image" do
        message = build(:message, image: nil)
        expect(message).to be_valid
      end

      it "is valid without a body" do
        message = build(:message, body: nil)
        expect(message).to be_valid
      end

      it "is valid with body & image" do
        message = build(:message)
        expect(message).to be_valid
      end
    end


    it "is invalid without image&body" do
      message = build(:message, image: nil, body: nil)
      message.valid?
      expect(message.errors[:body]).to include("を入力してください")
    end

    it "is invalid without a group_id" do
      message = build(:message, group_id: nil)
      message.valid?
      expect(message.errors[:group]).to include("を入力してください")
    end

    it "is invalid without a user_id" do
      message = build(:message, user_id: nil)
      message.valid?
      expect(message.errors[:user]).to include("を入力してください")
    end


  end

  describe '#index' do
  end
end