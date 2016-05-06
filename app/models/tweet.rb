class Tweet < ActiveRecord::Base
  belongs_to :user
  has_many :likes, :foreign_key => "to_id"
  include ActionView::Helpers::TextHelper

  def as_json(option={})
    super(methods: [:author, :key, :gravatar], except: [:updated_at])
  end

  def message
    simple_format super
  end

  def author
    user.name
  end

  def key
    self.id
  end

  def gravatar
    user.gravatar
  end
end
