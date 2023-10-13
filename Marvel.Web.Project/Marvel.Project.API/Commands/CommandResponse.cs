public record CommandResponse<TModel>
{
    public TModel? Entity { get; set; }
}