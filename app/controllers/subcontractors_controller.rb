class SubcontractorsController < ApplicationController

    def show
        subcontractor = Subcontractor.find(params[:id])
        if subcontractor
            render json: subcontractor
        else
            render json: {error: "Subcontractor not found"}, status: :not_found
        end
    end

    def index
        subcontractors = Subcontractor.all
        render json: subcontractors
    end
end
