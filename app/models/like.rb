class Like < ActiveRecord::Base
  include UserInteraction

  def as_json(option={})
    super(except: [:created_at, :updated_at])
  end

end
