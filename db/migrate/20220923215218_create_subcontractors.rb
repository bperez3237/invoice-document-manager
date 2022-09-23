class CreateSubcontractors < ActiveRecord::Migration[6.1]
  def change
    create_table :subcontractors do |t|
      t.string :name
      t.string :period_end
      t.integer :lunch

      t.timestamps
    end
  end
end
