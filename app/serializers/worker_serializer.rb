class WorkerSerializer < ActiveModel::Serializer
  attributes :id, :name, :base, :pt_base, :fringe, :pt_fringe, :section3, :subcontractor_id
end
