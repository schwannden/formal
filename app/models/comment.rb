class Comment < ActiveRecord::Base
  include UserInteraction
  include ActionView::Helpers::TextHelper

  def as_json(option={})
    super(methods: [:author, :key, :gravatar], except: [:updated_at])
  end

  def author
    from.name
  end

  def message
    simple_format super
  end

  def key
    self.id
  end

  def gravatar
    from.gravatar
  end
end
