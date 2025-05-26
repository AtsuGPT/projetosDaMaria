#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <windows.h>

int dado() {
    srand(time(NULL));
    int gerarDados = rand() % 6 + 1;
}
int chute;
int hwins, hloses, hall;
int tentativas = 0;
int menu;
int id;

typedef struct {
    char nome[20];
    int id;
} jogador;



void iniciar(jogador lista[], int id) {
    void escanearChutes(jogador lista[], int id) {
        printf("Adivinhe qual numero do dado de 6 lados:\n"); //mudar para d12 mais tarde
        scanf("%d", &chute);
        if (chute < 0 || chute > 6) {
            printf("Chute nao valido\n");
        } else {
            tentativas++;
        }
        printf("Tentativas: %d\n", tentativas);
    } escanearChutes(lista, id);
    if(chute == dado()) {
        printf("O numero era %d\n", dado());
        printf("Jogador ganhou!\n");
        hwins++; hall++;
    } else if (chute != dado() && chute > 0 && chute < 6) {
        printf("Jogador errou, tente novamente!\n");
        while (tentativas < 3) {
            escanearChutes(lista, id);
        } hloses++; hall++;
    } else {
        while (tentativas < 3) {
            escanearChutes(lista, id);
        }
    }
}

void registrarJogador(jogador lista[], int *totalJ) {
    printf("Digite o nome do jogador\n");
    getchar();
    fgets(lista[*totalJ].nome, 50, stdin);
    lista[*totalJ].nome[strcspn(lista[*totalJ].nome, "\n")] = '\0';
    lista[*totalJ].id = id;
    (*totalJ)++;
}

void sleep(int i);

int main() {
    jogador lista[50];
    int totalJ = 0;


    registrarJogador(lista, &totalJ);

    FILE *fj = fopen("jogadores.txt", "a"); // abre em modo append

    if (fj != NULL) {
        fprintf(fj, "ID: %d | Nome: %s\n", lista[totalJ].id, lista[totalJ].nome);
        fclose(fj);
    } else {
        printf("Erro ao salvar jogador.\n");
    }

    FILE *fh = fopen("historico.txt", "a"); // append = mantém registros antigos

    if (fh != NULL) {
        fprintf(fh, "Jogador: %s | Vitórias: %d | Derrotas: %d | Total: %d\n", lista[id].nome, hwins, hloses, hall);
        fclose(fh);
    } else {
        printf("Erro ao salvar histórico.\n");
    }


    {
        printf("1. Inicar\n2. Historico\n3. Sair\n");
        scanf("%d", &menu);
        getchar();

        switch (menu) {
            case 1:
                printf("Iniciando o jogo\n");
                for (int i = 0; i < 3; i++) {
                    printf(".\n");
                    sleep(1);
                }
                iniciar(lista, id);
                break;
            case 2:
                printf("Historico\n");
                break;
            case 3:
                printf("Saindo...\n");
                break;
            default:
                printf("Número inválido\n");
        }

        return 0;
    }
}
