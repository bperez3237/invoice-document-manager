class WorkersController < ApplicationController

    def show
        worker = Worker.find(params[:id])
        if worker
            render json: worker
        else 
            render json: { error: "Worker Not Found"}, status: :not_found
        end
    end

    def index
        workers = Worker.all
        render json: workers
    end

    def create
        worker = Worker.create(worker_params)
        if worker.valid?
            render json: worker, status: :created
        else
            render json: {error: worker.errors}, status: :unprocessable_entity
        end
    end

    def update
        worker = Worker.find(params[:id])
        if worker
            worker.update(worker_params)
            if worker.valid?
                render json: worker
            else 
                render json: {error: worker.errors}, status: :unprocessable_entity
            end
        else
            render json: {error: "Worker not found"}, status: :not_found
        end
    end

    private

    def worker_params
        params.permit(:name, :base, :pt_base, :fringe, :pf_fringe, :section3, :subcontractor_id)
    end
end
