class Worker < ApplicationRecord
    belongs_to :subcontractor

    validates :name, :base, :pt_base, :fringe, :pt_fringe, :section3, :subcontractor_id, presence: true
    validates :base, :pt_base, :fringe, :pt_fringe, numericality: true
end
