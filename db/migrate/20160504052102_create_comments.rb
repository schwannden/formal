class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :to_id
      t.integer :from_id
      t.text :message

      t.timestamps null: false
    end
  end
end
