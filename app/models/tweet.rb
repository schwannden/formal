class Tweet < ActiveRecord::Base
  belongs_to :user
  has_many :likes,    :foreign_key => "to_id"
  has_many :comments, :foreign_key => "to_id"
  validates :user, presence: true

  def as_json(option={})
    super(methods: [:author, :gravatar], except: [:updated_at])
  end

  def author
    user.name
  end

  def gravatar
    user.gravatar
  end
end
