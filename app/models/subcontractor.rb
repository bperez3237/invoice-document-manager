class Subcontractor < ApplicationRecord
    has_many :workers

    validates :name, :period_end, presence: true
end
