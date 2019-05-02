# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  firstname       :string           not null
#  lastname        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :user_songs, dependent: :destroy, inverse_of: :user

    has_many :songs,
    through: :user_songs,
    source: :song

    has_many :follower_followings, dependent: :destroy, inverse_of: :follower
    has_many :follower_followings, dependent: :destroy, inverse_of: :following

    attr_reader :password 
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user 
    end

    def password=(password) 
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token 
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
