class AddDowToEvent < ActiveRecord::Migration
  def change
    add_column :events, :dow, :string
  end
end
