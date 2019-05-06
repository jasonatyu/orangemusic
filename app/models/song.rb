# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  time       :integer          not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
    validates :title, :time, :artist_id, :album_id, presence: true 
    
    belongs_to :artist 
    belongs_to :album

    has_many :playlist_songs, dependent: :destroy, inverse_of: :song
    
    has_many :user_songs, dependent: :destroy, inverse_of: :song

    has_many :users,
    through: :user_songs,
    source: :user

    has_one_attached :song
    
end
