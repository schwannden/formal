class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :to_id
      t.integer :from_id

      t.timestamps null: false
    end
  end
end
