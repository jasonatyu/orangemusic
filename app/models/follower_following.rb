# == Schema Information
#
# Table name: follower_followings
#
#  id           :bigint           not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FollowerFollowing < ApplicationRecord
    validates :follower_id, uniqueness: { scope: :following_id }
    belongs_to :follower
    belongs_to :following
end
