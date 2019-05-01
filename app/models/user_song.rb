# == Schema Information
#
# Table name: user_songs
#
#  id         :bigint           not null, primary key
#  song_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserSong < ApplicationRecord
    validates :song_id, uniqueness: { scope: :user_id }

    belongs_to :user 
    belongs_to :song 
    
end
