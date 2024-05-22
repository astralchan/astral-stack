use axum::{routing::get, Router};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app: Router = Router::new()
        .route("/", get(root));

    let listener: TcpListener = tokio::net::TcpListener::bind("0.0.0.0:3000")
        .await
        .unwrap();
    println!("Listening on {}...", listener
        .local_addr()
        .unwrap());

    axum::serve(listener, app)
        .await
        .unwrap();
}

async fn root() -> &'static str {
    "I am (g)root"
}
