# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'


puts 'seeding subs'

s1 = Subcontractor.create(name: 'sub 1', period_end: Date.new(2022,10,2),lunch: 30)
s2 = Subcontractor.create(name: 'sub 2', period_end: Date.new(2022,10,4),lunch: 15)



puts 'seeding workers'

w1 = Worker.create(name: 'guy 1', base: 10, pt_base: 15, fringe: 8, pt_fringe: 11, section3: false, subcontractor_id: s1.id) 
w2 = Worker.create(name: 'guy 2', base: 20, pt_base: 30, fringe: 8, pt_fringe: 11, section3: true, subcontractor_id: s2.id) 
w3 = Worker.create(name: 'guy 3', base: 10, pt_base: 15, fringe: 8, pt_fringe: 11, section3: false, subcontractor_id: s1.id) 