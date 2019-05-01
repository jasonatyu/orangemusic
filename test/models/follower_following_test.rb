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

require 'test_helper'

class FollowerFollowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
