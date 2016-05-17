class Event < ActiveRecord::Base
  def as_json(option={})
    super(except: [:created_at, :updated_at])
  end

  def start
    super.to_i
  end

  def end
    super.to_i
  end
end
