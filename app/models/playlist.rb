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
#  type        :string
#  headline    :string
#  subheadline :string
#

class Playlist < ApplicationRecord
    validates :name, :user_id, presence: true 

    belongs_to :user 

    has_many :playlist_songs, dependent: :destroy, inverse_of: :playlist

    has_many :songs,
    through: :playlist_songs,
    source: :song

    has_one_attached :photo

end
