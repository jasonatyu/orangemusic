# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  category    :string
#  description :text
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord
    validates :title, :year, :artist_id, presence: true 

    belongs_to :artist 
    has_many :songs 
end
