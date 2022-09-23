class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :name
      t.float :base
      t.float :pt_base
      t.float :fringe
      t.float :pt_fringe
      t.boolean :section3
      t.integer :subcontractor_id

      t.timestamps
    end
  end
end
