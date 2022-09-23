# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_23_215218) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "subcontractors", force: :cascade do |t|
    t.string "name"
    t.string "period_end"
    t.integer "lunch"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  
  create_table "workers", force: :cascade do |t|
    t.string "name"
    t.float "base"
    t.float "pt_base"
    t.float "fringe"
    t.float "pt_fringe"
    t.boolean "section3"
    t.integer "subcontractor_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
