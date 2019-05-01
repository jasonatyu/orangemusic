# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  name        :string           default("Untitled Playlist"), not null
#  description :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PlaylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
