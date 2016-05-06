module UserInteraction
  extend ActiveSupport::Concern

  included do
    belongs_to :to  , :class_name => "Tweet"
    belongs_to :from, :class_name => "User"
  end
end
