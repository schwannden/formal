class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  before_save :set_name

  has_many :tweets
  has_many :comments, :foreign_key => "to_id"

  def as_json(option={})
    super(methods: [:gravatar])
  end

  def gravatar
    hash = Digest::MD5.hexdigest(self.email)
    "https://www.gravatar.com/avatar/#{hash}"
  end

  private

  def set_name
    if self.name == nil
      self.name = self.email.split('@')[0]
    end
  end
end
